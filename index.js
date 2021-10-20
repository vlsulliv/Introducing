inquirer
  .prompt([
    {
      name: "wants_pizza",
      type: "confirm",
      message: "Do you want a free pizza?",
    },
    {
      name: "confirm_answer",
      type: "confirm",
      message: "Are you sure?",
      when: (answers) => answers.wants_pizza === false,
    },
  ),
  {
    name: "confirm_answer",
    type: "confirm",
    message: "Are you sure?",
    when: (answers) => answers.wants_pizza === false,
  },
  {
    name: "confirm_answer",
    type: "confirm",
    message: "Are you sure?",
    when: (answers) => answers.wants_pizza === false,
  }
  .then((answers) => {
    if (answers.wants_pizza) {
      console.log("The user wants free pizza");
    } else if (answers.confirm_answer) {
      // the user definitely doesn't want pizza
    } else {
      // the user changed their mind
      // run the function to ask this question again
    } 
  });