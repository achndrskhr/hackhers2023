public class backend {

  private int dress; 
  private int dressLength; 
  private int dressThickness;
  private int top;
  private int sleeveLength; 
  private int topThickness; 
  private int bottoms; 
  private int bottomsLength;
  private int bottomsThickness; 
  private int jacket; 
  private int jacketLength;
  private int jacketThickness;
  private int hat;
  private int gloves; 
  private int scarf;

  //private String location; 

  public static void main (String[], args){

    //need the input for top, dress, and bottoms

    if (this.dress == 1){
      if (){
         this.dressLength = 3; 
      }
      else if (){
        this.dressLength = 2;
      }
      else {
        this.dressLength = 1; 
      }

      if (){
        this.dressThickness = 3;
      }
      else if (){
        this.dressThickness = 2;
      }
      else {
        this.dressThickness = 1;
      }
     
    }
    else {
      this.dressLength = 0;
      this.dressThickness = 0;
    }

    if (this.top == 1){
      if (){
        this.sleeveLength = 3;
      }
      else if (){
        this.sleeveLength = 2;
      }
      else {
        this.sleeveLength = 1;
      }

      if (){
        this.topThickness = 3;
      }
      else if (){
        this.topThickness = 2;
      }
      else{
        this.topThickness = 1;
      }
    }
    else{
      this.sleeveLength = 0;
      this.topThickness = 0;
    }

    if (this.bottoms == 1){
      if (){
        this.bottomsLength = 3;
      }
      else if (){
        this.bottomsLength = 2;
      }
      else {
        this.bottomsLength = 1;
      }

      if (){
        this.bottomsThickness = 3;
      }
      else if (){
        this.bottomsThickness = 2;
      }
      else{
        this.bottomsThickness = 1;
      }
    }
    else {
      this.bottomsLength = 0;
      this.bottomsThickness = 0;
    }

    if (this.jacket ==1){
      if (){
        this.jacketLength = 3;
      }
      else if (){
        this.jacketLength = 2;
      }
      else {
        this.jacketLength = 1; 
      }

      if(){
        this.jacketThickness = 3;
      }
      else if (){
        this.jacketThickness = 2;
      }
      else {
        this.jacketThickness = 1;
      }
      
    }
    else{
      this.jacketLength = 0;
      this.jacketThickness = 0;
    }

    //need input about hats, glove and scarf

    //if hat is yes, this.hat = 1; if hat is no, this.hat = 0
    //if gloves is yes, this.gloves = 1; if gloves is no, this.gloves 0
    //if scarf is yes, this.scarf = 1; if scarf is no, this.scarf = o

    int sum = this.dressLength + this.dressThickness + this.sleeveLength + this.topThickness + this.bottomsLength + this.bottomsThickness + this.jacketLength + this.jacketThickness + this.hat + this.gloves + this.scarf; 

    double feelsLike = 0.0; 

    if (feelsLike <= 20.0){
      if (sum >=16){
        StdOut.println("Your outfit is appropriate for today's weather.");
      }
      else {
        StdOut.println("Your outfit is not appropriate for today's weather.");
      }
      
    }
    else if ((feelsLike > 20.0) && (feelsLike <=40)){
      if ((sum <=15) && (sum >=10)){
        StdOut.println("Your outfit is appropriate for today's weather.");
      }
      else{
        StdOut.println("Your outfit is not appropriate for today's weather.");
      }
      
    }
    else if ((feelsLike > 40.0) && (feelsLike <=60.0)){
      if ((sum <=10) && (sum >=7)){
        StdOut.println("Your outfit is appropriate for today's weather.");
      }
      else{
        StdOut.println("Your outfit is not appropriate for today's weather.");
      }
    }

    if ((feelsLike > 60.0) && (feelsLike <=80.0)){
      if ((sum <=8) && (sum >=4)){
        StdOut.println("Your outfit is appropriate for today's weather.");
      }
      else {
        StdOut.println("Your outfit is not appropriate for today's weather.");
      }
    }

    if (feelsLike > 80.0){
      if ((sum <=4) && (sum >= 2)){
        StdOut.println("Your outfit is appropriate for today's weather.");
      }
      else{
        StdOut.println("Your outfit is not appropriate for today's weather.");
      }
    }

  }


  // for (int i = 0; i < choices.length; i++){
  //   if (choices[i].value == 'yes'){
  //     if ((choices[i] == 'shirt') || (choices[i] == 'dress') || (choices[i] == 'bottoms')){
  //       if (choices[i].length == )
  //     }
  //   }
  // }
  
}