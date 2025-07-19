export type Lesson = {
  id: string;
  prompt: string;
  phrase: string;
  wordBank: string[];
  correct: string[];
};

export type Unit = {
  title: string;
  lessons: Lesson[];
};

export type Section = {
  title: string;
  units: Unit[];
};

export type Course = {
  sections: Section[];
};

export type Courses = Record<string, Course>;

export const courses: Courses = {
  yoruba: {
    sections: [
      {
        title: "beginner",
        units: [
          {
            title: "basic-greetings",
            lessons: [
              { id: "100345", prompt: "Write this in English", phrase: "Excuse-moi.", wordBank: ["do", "Excuse", "me"], correct: ["Excuse", "me"] },
              { id: "100346", prompt: "Translate this", phrase: "Bonjour", wordBank: ["Hello", "Goodbye"], correct: ["Hello"] }
            ]
          },
          {
            title: "polite-phrases",
            lessons: [
              { id: "100347", prompt: "Translate this", phrase: "Merci", wordBank: ["Thank", "You"], correct: ["Thank", "You"] }
            ]
          }
        ]
      },
      {
        title: "order-at-restaurant",
        units: [
          {
            title: "ordering-food",
            lessons: [
              { id: "100348", prompt: "Translate this", phrase: "Je voudrais une pizza", wordBank: ["I", "would", "like", "a", "pizza"], correct: ["I", "would", "like", "a", "pizza"] }
            ]
          }
        ]
      },
    ]
  },
  french: {
    sections: [
      {
        title: "debutant",
        units: [
          {
            title: "salutations",
            lessons: [
              { id: "200101", prompt: "Traduisez ceci en anglais", phrase: "Bonjour", wordBank: ["Hello", "Goodbye"], correct: ["Hello"] }
            ]
          }
        ]
      }
    ]
  }
};
