import java.util.*;
public class J{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        for(int i=1;i<=n;i++){
            char ch='A';
            for(int j=1;j<=i;j++)System.out.print((ch++));
            System.out.println();
        }
        System.out.println();
    }
}