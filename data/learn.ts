export type Lesson = {
  id: string;
  label: string;
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

export type Language = {
  sections: Section[];
};

export type Languages = Record<string, Language>;

export const languages: Languages = {
  yoruba: {
    sections: [
      {
        title: "yoruba-alphabets",
        units: [
          {
                title: "basic-alphabets",
                lessons: [
                      { id: "100001", label: "A", prompt: "What is this letter?", phrase: "A", wordBank: ["A"], correct: ["A"] },
                      { id: "100002", label: "B", prompt: "What is this letter?", phrase: "B", wordBank: ["B"], correct: ["B"] },
                      { id: "100003", label: "D", prompt: "What is this letter?", phrase: "D", wordBank: ["D"], correct: ["D"] },
                      { id: "100004", label: "E", prompt: "What is this letter?", phrase: "E", wordBank: ["E"], correct: ["E"] },
                      { id: "100005", label: "Ẹ", prompt: "What is this letter?", phrase: "Ẹ", wordBank: ["Ẹ"], correct: ["Ẹ"] },
                      { id: "100006", label: "F", prompt: "What is this letter?", phrase: "F", wordBank: ["F"], correct: ["F"] },
                      { id: "100007", label: "G", prompt: "What is this letter?", phrase: "G", wordBank: ["G"], correct: ["G"] },
                      { id: "100008", label: "GB", prompt: "What is this letter?", phrase: "GB", wordBank: ["GB"], correct: ["GB"] },
                      { id: "100009", label: "H", prompt: "What is this letter?", phrase: "H", wordBank: ["H"], correct: ["H"] },
                      { id: "100010", label: "I", prompt: "What is this letter?", phrase: "I", wordBank: ["I"], correct: ["I"] },
                      { id: "100011", label: "J", prompt: "What is this letter?", phrase: "J", wordBank: ["J"], correct: ["J"] },
                      { id: "100012", label: "K", prompt: "What is this letter?", phrase: "K", wordBank: ["K"], correct: ["K"] },
                      { id: "100013", label: "L", prompt: "What is this letter?", phrase: "L", wordBank: ["L"], correct: ["L"] },
                      { id: "100014", label: "M", prompt: "What is this letter?", phrase: "M", wordBank: ["M"], correct: ["M"] },
                      { id: "100015", label: "N", prompt: "What is this letter?", phrase: "N", wordBank: ["N"], correct: ["N"] },
                      { id: "100016", label: "O", prompt: "What is this letter?", phrase: "O", wordBank: ["O"], correct: ["O"] },
                      { id: "100017", label: "Ọ", prompt: "What is this letter?", phrase: "Ọ", wordBank: ["Ọ"], correct: ["Ọ"] },
                      { id: "100018", label: "P", prompt: "What is this letter?", phrase: "P", wordBank: ["P"], correct: ["P"] },
                      { id: "100019", label: "R", prompt: "What is this letter?", phrase: "R", wordBank: ["R"], correct: ["R"] },
                      { id: "100020", label: "S", prompt: "What is this letter?", phrase: "S", wordBank: ["S"], correct: ["S"] },
                      { id: "100021", label: "Ṣ", prompt: "What is this letter?", phrase: "Ṣ", wordBank: ["Ṣ"], correct: ["Ṣ"] },
                      { id: "100022", label: "T", prompt: "What is this letter?", phrase: "T", wordBank: ["T"], correct: ["T"] },
                      { id: "100023", label: "U", prompt: "What is this letter?", phrase: "U", wordBank: ["U"], correct: ["U"] },
                      { id: "100024", label: "W", prompt: "What is this letter?", phrase: "W", wordBank: ["W"], correct: ["W"] },
                      { id: "100025", label: "Y", prompt: "What is this letter?", phrase: "Y", wordBank: ["Y"], correct: ["Y"] }
                    ]
          }]
      },
      {
        title: "beginner",
        units: [
          {
            title: "basic-greetings",
            lessons: [
              { 
                id: "200001", 
                label: "Ẹ kú àárọ̀", 
                prompt: "Write this in English", 
                phrase: "Ẹ kú àárọ̀", 
                wordBank: ["Good", "Morning", "Evening"], 
                correct: ["Good", "Morning"] 
              },
              { 
                id: "200002", 
                label: "Báwo ni?", 
                prompt: "Translate this", 
                phrase: "Báwo ni?", 
                wordBank: ["How", "are", "you"], 
                correct: ["How", "are", "you"] 
              }
            ]
          },
          {
            title: "polite-phrases",
            lessons: [
              { 
                id: "200003", 
                label: "Ẹ ṣé", 
                prompt: "Translate this", 
                phrase: "Ẹ ṣé", 
                wordBank: ["Thank", "You"], 
                correct: ["Thank", "You"] 
              },
              { 
                id: "200004", 
                label: "Ẹ jọ̀ọ́", 
                prompt: "Translate this", 
                phrase: "Ẹ jọ̀ọ́", 
                wordBank: ["Please"], 
                correct: ["Please"] 
              }
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
              { id: "100348", label: "Je voudrais une pizza", prompt: "Translate this", phrase: "Je voudrais une pizza", wordBank: ["I", "would", "like", "a", "pizza"], correct: ["I", "would", "like", "a", "pizza"] }
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
              { id: "200101", label: "Bonjour", prompt: "Traduisez ceci en anglais", phrase: "Bonjour", wordBank: ["Hello", "Goodbye"], correct: ["Hello"] }
            ]
          },
          {
            title: "basic-greetings",
            lessons: [
              { id: "100345", label: "Excuse-moi.", prompt: "Write this in English", phrase: "Excuse-moi.", wordBank: ["do", "Excuse", "me"], correct: ["Excuse", "me"] },
              { id: "100346", label: "Bonjour", prompt: "Translate this", phrase: "Bonjour", wordBank: ["Hello", "Goodbye"], correct: ["Hello"] }
            ]
          },
          {
            title: "polite-phrases",
            lessons: [
              { id: "100347", label: "Merci", prompt: "Translate this", phrase: "Merci", wordBank: ["Thank", "You"], correct: ["Thank", "You"] }
            ]
          }
        ]
      }
    ]
  }
};
