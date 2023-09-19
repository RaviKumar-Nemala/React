const RANGE = 26;
//returns the random string of length 5 ;
export let get_random_str  = ()=> { 
     let ans = new String();
     for( let i = 0 ; i < 5 ; i ++ )
     {
          let ch = Math.floor( Math.random() * RANGE);
                    
          ch = String.fromCharCode(97 + ch );

          ans += ch ;
     }
     console.log( ans );

     return ans;
}
