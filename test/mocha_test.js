/**
 * Test for getting started with Selenium.
 */
"use strict";

const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox");
const By = webdriver.By;

let browser;

// Test Suite
test.describe("JSRamverk", function() {

    // Executed before each test case
    test.beforeEach(function(done) {
        this.timeout(20000);
        const screen = { width: 1920, height: 1080};
        browser = new webdriver.Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless().windowSize(screen)) .build();

        browser.get("https://ponand.me/");
        done();
    })

    // Executed after each test case
    test.afterEach(function(done) {
        browser.quit();
        done();
    });

    test.it("Test index", function(done) {
        // Check correct title
        browser.getTitle().then(function(title) {
            assert.equal(title, "React App");
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith(""));
        });

        done();
    });

    test.it("Test register", function(done) {
        // Use nav link to go to register page
        browser.findElement(By.linkText("Registrera")).then(function(element) {
            element.click();
        });

        // Check correct h2
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Registrera en användare");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("register"));
        });

        done();
    });

    test.it("Test login", function(done) {
        // Use nav link to go to login page
        browser.findElement(By.linkText("Logga In")).then(function(element) {
            element.click();
        });

        // Check correct h2
        browser.findElement(By.css("h2")).then(function(element) {
            element.getText().then(function(text) {
                assert.equal(text, "Logga in");
            });
        });

        // Check correct URL ending
        browser.getCurrentUrl().then(function(url) {
            assert.ok(url.endsWith("login"));
        });

        done();
    });
});
