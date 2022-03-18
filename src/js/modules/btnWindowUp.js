function windowUp() {
  const btn = document.querySelector('.btnWindowUp');
  btn.addEventListener('click', () => {
    console.log('sfsd')
    document.body.scrollIntoView({block: "start", behavior: "smooth"});

  })
}

export default windowUp;