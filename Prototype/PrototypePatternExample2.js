function Fruits(title) {
    this.title = title
  }
  
  const Mango = new Fruits('Mango')
  const Apple = new Fruits('Apple')
  const Orange = new Fruits('Orange')
  
  console.log(Mango.constructor.name)
  console.log(Apple.constructor.name)
  console.log(Orange.constructor.name)