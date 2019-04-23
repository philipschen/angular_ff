export class kitchenModel {
    name: String;
    workingdays: {"monday": Boolean, 
        "tuesday": Boolean,
        "wednesday": Boolean,
        "thursday": Boolean,
        "friday": Boolean,
        "saturday": Boolean,
        "sunday": Boolean,
    };
    starttime: String;
    endtime: String;
    item: {"itemname": String,
        "veg": Boolean,
        "price": String,
    };
  }