"use strict";

var assert = require("assert");

describe("data driven test", () => {
  context("check input scheme", () => {
    [
      {
        values: "This is a string, not an object. This won't work!!",
        expected: {
          name: "sheet2",
          freeze: "A1",
          styles: [],
          merges: [],
          rows: {},
          validations: [],
        },
      },
      {
        values: 100,
        expected: {
          name: "sheet2",
          freeze: "A1",
          styles: [],
          merges: [],
          rows: {},
          validations: [],
        },
      },
      {
        values: {
          name: "sheet2",
          freeze: "A1",
          styles: [],
          merges: [],
          rows: {},
        },
        expected: {
          name: "sheet2",
          freeze: "A1",
          styles: [],
          merges: [],
          rows: {},
          validations: [],
        },
      },
      {
        values: {
          name: "sheet2",
          freeze: "A1",
          styles: [],
          merges: [],
          rows: {},
          validations: [],
        },
        expected: {
          name: "sheet2",
          freeze: "A1",
          styles: [],
          merges: [],
          rows: {},
          validations: [],
        },
      },
    ].forEach((e) => {
      it(`should compare ${e.values} with ${e.expected}`, (done) => {
        assert.deepEqual(e.values, e.expected, "need to be same schemes");
        done();
      });
    });
  });
});
