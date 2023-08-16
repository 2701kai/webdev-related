# Jest: Commands and Options

Jest, a popular JavaScript testing framework, offers a myriad of commands and options to provide developers a customizable test running experience. Here's an overview of some of the commonly used Jest commands.

## Common Jest Commands

1. **`jest`**:

   - Simply running `jest` will initiate all of your tests.

2. **`jest [testPath]`**:

   - Run tests found in a specific file or directory. E.g., `jest /tests/myTest.js` would only run the tests in the `myTest.js` file.

3. **`jest --watch`**:

   - Starts Jest in watch mode. Automatically reruns tests upon detected file changes.

4. **`jest --watchAll`**:

   - Reruns all tests when any file changes, unlike `--watch`.

5. **`jest --coverage`**:

   - Runs tests and generates a coverage report, showing the portion of your code covered by tests.

6. **`jest --config=<path/to/json>`**:

   - Specify a custom config file instead of the default `jest.config.js`.

7. **`jest --testNamePattern=<regex>`**:

   - Run tests whose name matches the provided regular expression.

8. **`jest --bail`**:

   - Stops the test suite immediately upon the first failing test.

9. **`jest --onlyChanged`**:

   - Runs tests related to files changed as detected by Git.

10. **`jest --verbose`**:

    - Displays individual test results with the test suite hierarchy.

11. **`jest --noStackTrace`**:

    - Disables stack trace output for test results.

12. **`jest --runInBand`**:

    - Runs all tests serially in the current process.

13. **`jest --detectOpenHandles`**:
    - Detects potentially leaking handles preventing Jest from exiting cleanly.

For a comprehensive list of Jest command-line options, refer to the official [Jest documentation](https://jestjs.io/docs/cli).
