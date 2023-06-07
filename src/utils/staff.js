export const generateEmployee = () => {
  const first = firstNameList[Math.floor(Math.random() * firstNameList.length)];
  const last = lastNameList[Math.floor(Math.random() * lastNameList.length)];

  const id = crypto.randomUUID();
  const name = `${first.firstName} ${last}`;
  const image = `https://source.unsplash.com/random/?${first.gender}=${id}`;
  const content = Math.floor(Math.random() * 80) + 10;
  const tolerance = Math.floor(Math.random() * 80) + 10;

  return { id, name, image, content, tolerance };
};

const firstNameList = [
  { firstName: "Michael", gender: "male" },
  { firstName: "Dwight", gender: "male" },
  { firstName: "Jim", gender: "male" },
  { firstName: "Pam", gender: "female" },
  { firstName: "Ryan", gender: "male" },
  { firstName: "Andy", gender: "male" },
  { firstName: "Stanley", gender: "male" },
  { firstName: "Kevin", gender: "male" },
  { firstName: "Meredith", gender: "female" },
  { firstName: "Angela", gender: "female" },
  { firstName: "Oscar", gender: "male" },
  { firstName: "Phyllis", gender: "female" },
  { firstName: "Jan", gender: "female" },
  { firstName: "Toby", gender: "male" },
  { firstName: "Kelly", gender: "female" },
  { firstName: "Creed", gender: "male" },
  { firstName: "Erin", gender: "female" },
  { firstName: "Gabe", gender: "male" },
  { firstName: "Holly", gender: "female" },
  { firstName: "Nellie", gender: "female" },
];

const lastNameList = [
  "Scott",
  "Schrute",
  "Halpert",
  "Beesly",
  "Howard",
  "Bernard",
  "Hudson",
  "Malone",
  "Palmer",
  "Martin",
  "Martinez",
  "Lapin",
  "Levinson",
  "Flenderson",
  "Kapoor",
  "Bratton",
  "Hannon",
  "Lewis",
  "Flax",
  "Bertram",
];
