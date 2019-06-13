const restart = () => {
  this.clearLocalStorage();
  this.timer = setTimeout(function() {
    this.clearLocalStorage();   
  }, 0);
};