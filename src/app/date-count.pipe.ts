import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //to get curent date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs( todayWithNoTime - value) //returns value in miliseconds
    const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
    var dateDifferenceSeconds = dateDifference*0.001; //converts miliseconds to seconds
    var dateCounter = Math.trunc( dateDifferenceSeconds/secondsInDay); //truncate the decimals
    //console.log(value)

    if (dateCounter >= 1 && todayWithNoTime > value){
      return dateCounter;
    }
    else {
    return 0;
    }
  }
}

//@Pipe decorator that defines the name if the pipe

//DateCountPipe class has a transform function that takes in value from
// the date object from Quotes