function dayName(date) {
      const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                       "Thursday", "Friday", "Saturday"];
      return daysOfTheWeek[now.getDay()]
     } 

function greeting() {
    let now = new Date();
    return alert(`Hello, mermaid! Ocean ${dayName(now)}.`)
}

greeting();