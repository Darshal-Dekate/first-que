const res = students.sort((a, b) => {
  const m1 = a.chemistry + a.biology
  const m2 = b.chemistry + b.biology

  if (m1 < m2) {
      return -1;
  }
  if (m1 > m2) {
      return 1;
  }
  
  if (a.biology < b.biology) {
      return -1;
  }
  if (a.biology > b.biology) {
      return 1;
  }
  
  if (a.chemistry < b.chemistry) {
      return -1;
  }
  if (a.chemistry > b.chemistry) {
      return 1;
  }
  
  const dob1 = a.dob.split('-')
  const dob2 = b.dob.split('-')
  
  let flag=0;
  
  for(let i=dob1.length-1.;i>=0;i--)
  {
      if(dob1[i]<dob2[i])
      {
          flag = 1
          break;
      }
      if(dob1[i]>dob2[i])
      {
          flag = -1
          break;
      }
  }
  
  return flag;
});

console.log((res.map(item=>item.name)).reverse())