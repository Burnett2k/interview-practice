// 🧩 Mock Prompt: Sanitize and Deduplicate Emails

// Write a function cleanEmails(emails) that takes an array of email strings and returns a list of unique, normalized emails.

// ✅ Requirements:
// 	•	Emails should be trimmed of whitespace and lowercased
// 	•	Ignore completely invalid emails (no @, empty string, etc.)
// 	•	Remove duplicates (after normalization)
// 	•	Don’t throw on weird inputs — return an empty array if input is not a valid array

// input: array of emails
// output: array of emails
const sanitizeEmails = (emails = []) => {
  if (!Array.isArray(emails)) return [];

  const emailSet = new Set();

  for (const email of emails) {
    // ignore invalid emails
    if (typeof email === "string") {
      let sanitizedEmail = email.trim(); // trim whitespace
      if (validEmail(sanitizedEmail)) {
        sanitizedEmail = sanitizedEmail.toLowerCase(); // to lower it
        emailSet.add(sanitizedEmail);
      }
    }
  }

  return Array.from(emailSet);
};

const validEmail = (email) => {
  if (typeof email === "string") {
    const parts = email.split("@"); // sawyerburnett@gmail.com
    if (parts.length === 2 && parts[0].length && parts[1].includes(".")) {
      // first part contains something, second part contains a period.
      return true;
    }
  }
  return false;
};

console.log(
  sanitizeEmails([
    "  ALICE@example.com  ",
    "bob@example.com",
    "BOB@example.com",
    "",
    null,
    "invalid-email",
    "carol@example.com",
    "   ",
    "@.com",
    "user@domain",
    "user@domain.com",
  ])
);
// ["alice@example.com", "bob@example.com", "carol@example.com", "user@domain.com"]
