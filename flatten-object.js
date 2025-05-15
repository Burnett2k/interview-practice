// 🧪 Mock Prompt: Flatten Settings Object
// You’re given a nested settings object where the values can be primitives or other nested objects.
// Write a function flattenSettings(settings) that flattens this object into a
// single-level object with keys representing the full path to each leaf setting, joined by ".".

// ✅ Requirements:
// 	•	Keys should represent the path to the original nested value (e.g., "features.login.enabled").
// 	•	Only flatten if the value is an object — arrays and primitives are considered leaf values.
// 	•	Inputs can be empty or null — return an empty object in those cases.
// 	•	Defensive code: avoid throwing on weird inputs (like null, 42, "foo").

const flatten = (settings) => {
  // handles null, undefined, non-objects, empty objects
  if (
    settings === null ||
    settings === undefined ||
    typeof settings !== "object" ||
    Object.keys(settings).length === 0
  ) {
    return {};
  }

  let flattenedObj = {};

  const dig = (obj, path = []) => {
    for (const [key, value] of Object.entries(obj)) {
      const newPath = [...path, key];

      if (typeof value === "object" && !Array.isArray(value)) {
        // recursively dive into the method
        dig(value, newPath);
      } else {
        flattenedObj[newPath.join(".")] = value; // need to reset path somehow?
      }
    }
  };

  dig(settings);

  // loop over each item
  return flattenedObj;
};

const settings = {
  features: {
    login: {
      enabled: true,
      methods: ["email", "oauth"],
    },
    darkMode: false,
  },
  version: "1.0.0",
};

console.log(flatten(settings));
/*
{
  "features.login.enabled": true,
  "features.login.methods": ["email", "oauth"],
  "features.darkMode": false,
  "version": "1.0.0"
}
*/

console.log(flatten({ debug: true }));
// { "debug": true }

console.log(flatten({}));
// {}

console.log(flatten(null));
// {}

console.log(flatten("notAnObject"));
// {}

console.log(flatten({ a: { b: { c: { d: "deep" } } } }));
// { "a.b.c.d": "deep" }

console.log(flatten({ list: [1, 2, 3] }));
// { "list": [1, 2, 3] }  // array is treated as a leaf
