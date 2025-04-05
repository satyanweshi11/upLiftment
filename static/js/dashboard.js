document.addEventListener('DOMContentLoaded', function () {
    const context = document.getElementById("liftDataContext");
    const floorButtonsDiv = document.getElementById("floorButtons");
    const currentFloorSpan = document.getElementById("currentFloor");
    const liftStatus = document.getElementById("liftMovingText");
    const body = document.body;
  
    const floors = parseInt(context.dataset.floors);
    const hasTerrace = context.dataset.terrace === 'True';
    const hasParking = context.dataset.parking === 'True';
  
    let floorList = [];
  
    if (hasTerrace) floorList.push("T");
    for (let i = floors; i >= 1; i--) floorList.push(i.toString());
    floorList.push("G");
    if (hasParking) floorList.push("P");
  
    const backgroundColors = [
      "#fef6e4", "#f0efeb", "#e0fbfc", "#fcd5ce",
      "#d8e2dc", "#f9dcc4", "#b8f2e6", "#cdb4db",
      "#e2f0cb", "#f6d186"
    ];
  
    let queue = [];
  
    floorList.forEach((floor, index) => {
      const btn = document.createElement("button");
      btn.className = "btn btn-outline-primary floor-btn";
      btn.textContent = floor;
  
      btn.onclick = () => {
        if (currentFloorSpan.textContent === floor) {
          liftStatus.textContent = `You're already on floor ${floor}`;
          liftStatus.classList.remove("lift-moving");
          return;
        }
  
        if (!queue.includes(floor)) {
          queue.push(floor);
          btn.classList.add("btn-warning");
        }
      };
  
      floorButtonsDiv.appendChild(btn);
    });
  
    document.getElementById("closeDoorBtn").addEventListener("click", () => {
      if (queue.length === 0) return;
  
      liftStatus.textContent = "Lift is moving...";
      liftStatus.classList.add("lift-moving");
  
      const buttons = document.querySelectorAll('.floor-btn');
  
      let move = (index) => {
        if (index >= queue.length) {
          liftStatus.textContent = "Lift is idle";
          liftStatus.classList.remove("lift-moving");
          queue = [];
          return;
        }
  
        setTimeout(() => {
          const nextFloor = queue[index];
          currentFloorSpan.textContent = nextFloor;
  
          
          const colorIndex = index % backgroundColors.length;
          body.style.backgroundColor = backgroundColors[colorIndex];
  
          
          buttons.forEach(btn => {
            if (btn.textContent === nextFloor) {
              btn.classList.remove("btn-warning");
            }
          });
  
          move(index + 1);
        }, 1200); 
      };
  
      move(0);
    });
  });
  