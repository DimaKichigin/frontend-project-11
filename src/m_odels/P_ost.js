export default class Post {
   constructor(title) {
      this.title = title
      this.date = new Date()
   }
   toString() {
      JSON.stringify({
         title: this.title,
         date: this.date.toJSON()
      })
   }

   get uppercaseTitle() {
      return this.title.toUpperCase()
   }
}