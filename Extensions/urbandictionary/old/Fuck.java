public class Fuck {
    public static void main (String[] args) {
    // These code snippets use an open-source library. http://unirest.io/java
HttpResponse<String> response = Unirest.get("https://mashape-community-urban-dictionary.p.mashape.com/define?term=wat")
.header("X-Mashape-Key", "nbb8BufN1RmshcMFRYSsWjtRKlWFp1MM7KajsntVy4hRjBLADM")
.header("Accept", "text/plain")
.asString();
    }
}