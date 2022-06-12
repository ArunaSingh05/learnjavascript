let workshop = {
  teacher: "Kyle",
  ask: ask,
  test(question) {
    console.log('Teacher ===>', this.teacher, question)
  }
}

function ask(question) {
  console.log(this.teacher, question);
}


setTimeout(workshop.ask, 100, "What?")
setTimeout(ask.call(workshop, "Whats"), 10);
setTimeout(ask.bind(workshop, "what???"), 1000)
workshop.ask("What");


setTimeout(workshop.test.apply(workshop, ["When?"]), 1000);
setTimeout(workshop.test.call(workshop, "Where"), 10);
setTimeout(workshop.test.bind(workshop, "what???"), 1000)
workshop.test("How?");