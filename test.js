const restart = () => {
  this.clearLocalStorage();
  this.timer = setTimeout(() => {
    this.clearLocalStorage();   
  }, 0);
};