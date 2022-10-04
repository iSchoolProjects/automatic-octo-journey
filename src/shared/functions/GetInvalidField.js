// export const GetInvalidField = (data, array) => {
//   for (let i = 0; i < data.length; i++) {
//     if (!!!data[i]?.length) {
//       console.log(data[i]);
//       switch (i) {
//         case 0:
//           array.push("Invalid username");
//           break;
//         case 1:
//           array.push("Invalid email");
//           break;
//         case 2:
//           array.push("Invalid password");
//           break;
//         case 3:
//           array.push("Invalid repeat password");
//           break;
//         default:
//           console.log("No item");
//           break;
//       }
//     }
//   }
// };

export const InvalidField = (data, array) => {
  for (const [key, value] of Object.entries(data)) {
    if (!!!value?.length) {
      array.push("Invalid " + key);
    }
  }
};
