export const reviewBudget = (budget,remaining) =>{
  let classes;

  if((budget / 4) > remaining ){
    classes = 'alert alert-danger';


  }else if((budget / 2) > remaining){
    classes = 'alert alert-warning';
  }else{
    classes = 'alert alert-success'
  }
  return classes;
}