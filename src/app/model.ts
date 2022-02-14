export class Model {
    user;
    items;

    constructor(){
        this.user = "Eren";
        this.items = [
           new ToDoItem("Spor",true),
           new ToDoItem("Kahvaltı",false),
           new ToDoItem("Kitap okumak",false),
           new ToDoItem("sinema",false),
        ];
    }
}

export class ToDoItem {
    description;
    action;

    constructor(description: string,action: boolean){
        this.description = description;
        this.action = action;
    }
}