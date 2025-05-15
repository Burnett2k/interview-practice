// 🛠️ A Mock Prompt to Practice

// ⸻

// 🚀 Final Tips
// 	•	Clarify requirements before coding.
// 	•	Start simple, then iterate.
// 	•	Speak your thoughts aloud—this shows coachability.
// 	•	After solving, ask “How could this fail?” to catch edge cases.
// 	•	Practice switching from “get it working” to “make it robust.”

// ⸻

// Let me know if you’d like a few more realistic practice prompts or want to rehearse one together. And as always, do your own reps too—build the habit of writing safe, clear, defensive code.

// Write a function mergeAndSortUsers(users1, users2) that takes two arrays of user objects ({id, name}),
//  merges them by id, and returns a sorted array by name. Handle:
//  *   sort by Name ascending
// 	•	Duplicate IDs (keep first occurrence)
// 	•	Missing name fields -> ignore that item and don't use it
// 	•	Empty inputs => don't fail

const mergeAndSortUsers = (primaryUserGroup = [], secondaryUserGroup = []) => {
  let ids = new Set();
  let mergedUserGroup = [];

  for (const user of primaryUserGroup) {
    validateUser(user, ids, mergedUserGroup);
  }

  for (const user of secondaryUserGroup) {
    validateUser(user, ids, mergedUserGroup);
  }

  // sort the list
  mergedUserGroup.sort(compare);

  return mergedUserGroup;
};

const compare = (a, b) => {
  if (a.name < b.name) return -1;
  else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
};

const validateUser = (user, ids, mergedUserGroup) => {
  if (user.name && user.id && user.name.length > 0 && !ids.has(user.id)) {
    ids.add(user.id); // add user to set
    mergedUserGroup.push(user);
  }
};

console.log(
  mergeAndSortUsers([{ id: 1, name: "Alice" }], [{ id: 2, name: "Bob" }])
);
// [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]

console.log(
  mergeAndSortUsers(
    [{ id: 1, name: "Alice" }],
    [
      { id: 1, name: "Alicia" },
      { id: 2, name: "Bob" },
    ]
  )
);
// [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]

console.log(mergeAndSortUsers([{ id: 1 }], [{ id: 2, name: "Charlie" }]));
// [{ id: 2, name: "Charlie" }]

console.log(mergeAndSortUsers([], []));
// []

console.log(
  mergeAndSortUsers(
    [{ id: 1, name: "Zoe" }, { id: 2 }, { id: 3, name: "Amy" }],
    [
      { id: 4, name: "Brian" },
      { id: 2, name: "ShouldBeSkipped" },
      { notAnId: 999, name: "Nope" },
    ]
  )
);
// [{ id: 3, name: "Amy" }, { id: 4, name: "Brian" }, { id: 1, name: "Zoe" }]
