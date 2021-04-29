function techList(tech, name) {
    let techSort = tech.sort()
    let list = [];
    for (index = 0; index < techSort.length; index += 1) {
    let objects = {
        name: name,
        tech: ''
        }
      objects.name = name;
      objects.tech = techSort[index];
      list.push(objects)
    }
    return list;
  }
  
  console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));