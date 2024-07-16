const getSleepHours = day => {
  
    switch(day) {
      case 'monday':
      return 8
      break;
  
      case 'tuesday':
      return 7
      break;
  
      case 'wednesday':
      return 8
      break;
  
      case 'thursday':
      return 5
      break;
  
      case 'friday':
      return 8
      break;
  
      case 'saturday':
      return 7
      break;
  
      case 'sunday':
      return 8
      break;
      default:
      return "Error"
    }
  }; // how many hours of sleep function

  const getActualSleepHours = () => 
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
   // get sleep hours per each day of the week 

console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    let idealHours = 8; 
    return idealHours * 7;
  }; // get the ideal sleep hours

  