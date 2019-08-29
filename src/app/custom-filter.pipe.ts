import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter'
})
export class CustomFilterPipe implements PipeTransform {

  transform(value: any, name?: any): any {
    console.log(name);
    
    if(name[0]=='' && name[1]==0){
      return value;
    }
    else if(name[0]=='' && name[1]>0){
      return value.filter(v=>v.age==name[1])
    }
    else if(name[0]!='' && name[1]==0){
      return value.filter(r=>r.name.toLowerCase().startsWith(name[0].toLowerCase()))
    }
    else{
      return value.filter(r=>r.name.toLowerCase().startsWith(name[0].toLowerCase())).filter(a=>a.age==name[1])
    }
  }

}
