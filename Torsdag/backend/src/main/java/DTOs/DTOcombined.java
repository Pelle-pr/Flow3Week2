package DTOs;

public class DTOcombined {

       private String joke1;
    private String joke1Reference;
    private String joke2;
    private String joke2Reference;


    public DTOcombined(ChuckDTO chuck, DadDTO dad) {
        this.joke1 = chuck.getValue();
        this.joke1Reference = "https://api.chucknorris.io/jokes/random";
        this.joke2 = dad.getJoke();
        this.joke2Reference = "https://icanhazdadjoke.com";

    }
}
