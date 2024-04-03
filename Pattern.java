/**
 * Pattern
 */

// *
// **
// ***

public class Pattern {
    // for row
    public static void main(String[] args) {
        for (int i = 1; i < 6; i++) {
            // for space
            for (int j = 1; j < 6 - i; j++) {
                System.out.print(" ");
            }
            // for star
            for (int j = 6 - i; j < 6; j++) {
                System.out.print("*");
            }
            System.out.println("");
        }
    }
}