IntlPolyfill.__addLocaleData(
  {
    locale:"en-US",
    date:{
      ca:["gregory","generic"],
      hourNo0:true,
      hour12:true,
      formats:{
        short:"{1}, {0}",
        medium:"{1}, {0}",
        full:"{1} 'at' {0}",
        long:"{1} 'at' {0}",
        availableFormats:{
          "d":"d",
          dd:"dd",
          "c":"c",
          ccc:"ccc",
          cccc:"cccc",
          ccccc:"ccccc",
          "E":"EEE",Ed:"d E",Ehm:"E h:mm a",EHm:"E HH:mm",Ehms:"E h:mm:ss a",EHms:"E HH:mm:ss",
          EEEE:"EEEE",
          EEEEE:"EEEEE",
          Gy:"y G",GyMMM:"MMM y G",GyMMMd:"MMM d, y G",GyMMMEd:"E, MMM d, y G",
          "h":"h a","H":"HH",hm:"h:mm a",Hm:"HH:mm",hms:"h:mm:ss a",Hms:"HH:mm:ss",hmsv:"h:mm:ss a v",Hmsv:"HH:mm:ss v",hmv:"h:mm a v",Hmv:"HH:mm v",
          hh:"hh a",
          "L":"L",
          LL:"LL",
          LLL:"LLL",
          LLLL:"LLLL",
          LLLLL:"LLLLL",
          "M":"M",Md:"M/d",MEd:"E, M/d",
          MM:"MM",MMdd:"MM/dd",
          MMM:"MMM",MMMd:"MMM d",MMMEd:"E, MMM d",
          MMMM:"MMMM",MMMMd:"MMMM d",
          MMMMM:"MMMMM",
          "m":"m",ms:"mm:ss",
          mm:"mm",
          "s":"s",
          ss:"ss",
          "y":"y",yM:"M/y",yMd:"M/d/y",yMEd:"E, M/d/y",yMMM:"MMM y",yMMMd:"MMM d, y",yMMMEd:"E, MMM d, y",yMMMM:"MMMM y",yQQQ:"QQQ y",yQQQQ:"QQQQ y",
          yy:"yy"
        },
        dateFormats:{
          yMMMMEEEEd:"EEEE, MMMM d, y",yMMMMd:"MMMM d, y",yMMMd:"MMM d, y",yMd:"M/d/yy"
        },
        timeFormats:{
          hmmsszzzz:"h:mm:ss a zzzz",hmsz:"h:mm:ss a z",hms:"h:mm:ss a",hm:"h:mm a"
        }
      },
      calendars:{
        generic:{
          months:{
            narrow:["1","2","3","4","5","6","7","8","9","10","11","12"],
            short:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"],
            long:["M01","M02","M03","M04","M05","M06","M07","M08","M09","M10","M11","M12"]
          },
          days:{
            narrow:["S","M","T","W","T","F","S"],
            short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
            long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
          },
          eras:{narrow:["ERA0","ERA1"],short:["ERA0","ERA1"],long:["ERA0","ERA1"]},
          dayPeriods:{am:"AM",pm:"PM"}
        },
        gregory:{
          months:{
            narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],
            short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            long:["January","February","March","April","May","June","July","August","September","October","November","December"]
          },
          monthsStandAlone:{
            narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],
            short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
            long:["January","February","March","April","May","June","July","August","September","October","November","December"]
          },
          days:{
            narrow:["S","M","T","W","T","F","S"],
            short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
            long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
          },
          daysStandAlone:{
            narrow:["S","M","T","W","T","F","S"],
            short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
            long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
          },
          eras:{
            narrow:["B","A","BCE","CE"],
            short:["BC","AD","BCE","CE"],
            long:["Before Christ","Anno Domini","Before Common Era","Common Era"]
          },
          dayPeriods:{am:"AM",pm:"PM"}
        }
      }
    },
    number:{
      nu:["latn"],
      patterns:{
        decimal:{positivePattern:"{number}",negativePattern:"{minusSign}{number}"},
        currency:{positivePattern:"{currency}{number}",negativePattern:"{minusSign}{currency}{number}"},
        percent:{positivePattern:"{number}{percentSign}",negativePattern:"{minusSign}{number}{percentSign}"}
      },
      symbols:{latn:{decimal:".",group:",",nan:"NaN",plusSign:"+",minusSign:"-",percentSign:"%",infinity:"∞"}},
      currencies:{AUD:"A$",BRL:"R$",CAD:"CA$",CNY:"CN¥",EUR:"€",GBP:"£",HKD:"HK$",ILS:"₪",INR:"₹",JPY:"¥",KRW:"₩",MXN:"MX$",NZD:"NZ$",TWD:"NT$",USD:"$",VND:"₫",XAF:"FCFA",XCD:"EC$",XOF:"CFA",XPF:"CFPF"}
    }
  }
);