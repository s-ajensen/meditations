---
title: "The Junit XML Spec"
---

In the unit testing ecosystem, there are a number of libraries for any given language which will provide the basic functionality of taking a function with a specified input and asserting that it returned a given value, threw a given exception, executed some stub, etc. But one of the frameworks that helped set the standard for others was JUnit, the standard Java test suite. 

Included in JUnit is the ability to export the results from running your test suite to a standard XML format. This format has been mimicked by the test frameworks of other languages and has become somewhat of a defacto standard because of how simple it is.

All JUnit XML files require a single XML boilerplate tag to specify the version/encoding at the top of the file:

```xml
<?xml version="1.0" encoding="UTF-8" ?> 
```

After this, we must define our outermost wrapper tag, `<testsuites>`, which is responsible for housing each of our test classes. This tag contains metadata about its children such as an `id`, `name`, the number of `tests`/`failures`, as well as the `time` that it took to complete all the tests in the project (in seconds):

```xml
<?xml version="1.0" encoding="UTF-8" ?> 
  <testsuites id="20140612_170519" name="Project Specs (14/06/12 17:05:19)" tests="3" failures="0" time="0.003">
      ...
</testsuites>
```

Within this tag we specify a variable number of individual `testsuite` tags which represent each test class which exist in our project. These tags contain the same metadata as the parent `<testsuites>` tag but with individual granularity. As a result, the values for each of these attributes in the parent tag should equal the sum of those in the children:

```xml
<?xml version="1.0" encoding="UTF-8" ?> 
  <testsuites id="20140612_170519" name="Project Specs (14/06/12 17:05:19)" tests="3" failures="0" time="0.003">
    <testsuite id="com.company.Class1" name="Class 1" tests="1" failures="0" time="0.001">
         ...
    </testsuite>
    <testsuite id="com.company.Class2" name="Class 2" tests="1" failures="0" time="0.001">
         ...
    </testsuite>
    <testsuite id="com.company.Class3" name="Class 3" tests="1" failures="0" time="0.001">
         ...
    </testsuite>
</testsuites>
```

Each of these `<testsuite>` tags then contains each of the individual test case functions which the class defines. Each must be identified with an id and a name, as well as the amount of time it took to complete. As passing test case is formatted a such a tag with *no children*:

```xml
<testsuite id="com.company.Class1" name="Class 1" tests="1" failures="0" time="0.001">
  <testcase id="com.company.Class1.assertsTrue" name="It asserts" time="0.001"></testcase>
</testsuite>
```

Whereas a failure is signified by a `<testcase>` with a `<failure>` child that includes the `message`, `type`, and body of the stacktrace (if applicable).

For instance, a simple test failure would appear as

```xml
<testsuite id="com.company.Class1" name="Class 1" tests="1" failures="1" time="0.001">
  <testcase id="com.company.Class1.assertsTrue" name="It asserts" time="0.001">
    <failure message="Expected 'true' got 'false'" type="AssertionError"></failure>
  </testcase>
</testsuite>
```

Whereas a runtime error might look more like

```xml
<testsuite id="com.company.Class1" name="Class 1" tests="1" failures="1" time="0.001">
  <testcase id="com.company.Class1.assertsTrue" name="It asserts" time="0.001">
    <failure message="Cannot divide by 0" type="DivideByZeroException">
      [the stacktrace]
    </failure>
  </testcase>
</testsuite>
```

Taking this all together, a file with each of these cases could look like so:

```xml
<?xml version="1.0" encoding="UTF-8" ?> 
  <testsuites id="20140612_170519" name="Project Specs (14/06/12 17:05:19)" tests="3" failures="2" time="0.003">
    <testsuite id="com.company.Class1" name="Class 1" tests="1" failures="0" time="0.001">
      <testcase id="com.company.Class1.assertsTrue" name="It asserts" time="0.001"></testcase>
    </testsuite>
    <testsuite id="com.company.Class2" name="Class 2" tests="1" failures="1" time="0.001">
      <testcase id="com.company.Class2.assertsTrue" name="It asserts" time="0.001">
        <failure message="Expected 'true' got 'false'" type="AssertionError"></failure>
      </testcase>
    </testsuite>
    <testsuite id="com.company.Class3" name="Class 3" tests="1" failures="1" time="0.001">
      <testcase id="com.company.Class3.assertsTrue" name="It asserts" time="0.001">
        <failure message="Cannot divide by 0" type="DivideByZeroException">
        [the stacktrace]
        </failure>
      </testcase>
    </testsuite>
</testsuites>
```