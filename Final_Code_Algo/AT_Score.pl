
open (HANDEL, "$ARGV[0]") or die "Can't open input file: $!\n";
@sequence = <HANDEL>;

open (OUT, ">>$ARGV[1]") or die "Can't open output file: $!\n";

for($i=0; $i<=$#sequence; $i++)
{
@seq = split('', $sequence[$i]);

$a=0; $t=0; $g=0; $c=0;

	for($j=0; $j<=$#seq; $j++)
	{
		if ($seq[$j]eq'A')
		{
			if($seq[$j] eq'A' and $seq[$j-1] ne 'A')
			{$a = $a+1;}
			
			elsif($seq[$j] eq'A' and $seq[$j-1] eq 'A' and $seq[$j-2] ne 'A')
			{$a = $a+2;}

			elsif($seq[$j] eq 'A' and $seq[$j-1] eq 'A' and $seq[$j-2] eq 'A' and $seq[$j-3] ne 'A')
                        {$a = $a+3;}

			elsif($seq[$j] eq 'A' and $seq[$j-1] eq 'A' and $seq[$j-2] eq 'A' and $seq[$j-3] eq 'A' and $seq[$j-4] ne 'A')
                        {$a = $a+4;}

			elsif($seq[$j] eq 'A' and $seq[$j-1] eq 'A' and $seq[$j-2] eq 'A' and $seq[$j-3] eq 'A' and $seq[$j-4] eq 'A' and $seq[$j-5] ne 'A')
                        {$a = $a+5;}

			elsif($seq[$j] eq 'A' and $seq[$j-1] eq 'A' and $seq[$j-2] eq 'A' and $seq[$j-3] eq 'A' and $seq[$j-4] eq 'A' and $seq[$j-5] eq 'A' and $seq[$j-6] ne 'A')
                        {$a = $a+6;}

			elsif($seq[$j] eq 'A' and $seq[$j-1] eq 'A' and $seq[$j-2] eq 'A' and $seq[$j-3] eq 'A' and $seq[$j-4] eq 'A' and $seq[$j-5] eq 'A' and $seq[$j-6] eq 'A')
                        {$a = $a+7;}
		}

		elsif ($seq[$j]eq'T')
                {
                        if($seq[$j] eq'T' and $seq[$j-1] ne 'T')
                        {$t = $t+1;}

                        elsif($seq[$j] eq'T' and $seq[$j-1] eq 'T' and $seq[$j-2] ne 'T')
                        {$t = $t+2;}

                        elsif($seq[$j] eq 'T' and $seq[$j-1] eq 'T' and $seq[$j-2] eq 'T' and $seq[$j-3] ne 'T')
                        {$t = $t+3;}

                        elsif($seq[$j] eq 'T' and $seq[$j-1] eq 'T' and $seq[$j-2] eq 'T' and $seq[$j-3] eq 'T' and $seq[$j-4] ne 'T')
                        {$t = $t+4;}

                        elsif($seq[$j] eq 'T' and $seq[$j-1] eq 'T' and $seq[$j-2] eq 'T' and $seq[$j-3] eq 'T' and $seq[$j-4] eq 'T' and $seq[$j-5] ne 'T')
                        {$t = $t+5;}

                        elsif($seq[$j] eq 'T' and $seq[$j-1] eq 'T' and $seq[$j-2] eq 'T' and $seq[$j-3] eq 'T' and $seq[$j-4] eq 'T' and $seq[$j-5] eq 'T' and $seq[$j-6] ne 'T')
                        {$t = $t+6;}

                        elsif($seq[$j] eq 'T' and $seq[$j-1] eq 'T' and $seq[$j-2] eq 'T' and $seq[$j-3] eq 'T' and $seq[$j-4] eq 'T' and $seq[$j-5] eq 'T' and $seq[$j-6] eq 'T')
                        {$t = $t+7;}
                }	

		elsif ($seq[$j]eq'G')
                {
                        if($seq[$j] eq'G' and $seq[$j-1] ne 'G')
                        {$g = $g+1;}

                        elsif($seq[$j] eq'G' and $seq[$j-1] eq 'G' and $seq[$j-2] ne 'G')
                        {$g = $g+2;}

                        elsif($seq[$j] eq 'G' and $seq[$j-1] eq 'G' and $seq[$j-2] eq 'G' and $seq[$j-3] ne 'G')
                        {$g = $g+3;}

                        elsif($seq[$j] eq 'G' and $seq[$j-1] eq 'G' and $seq[$j-2] eq 'G' and $seq[$j-3] eq 'G' and $seq[$j-4] ne 'G')
                        {$g = $g+4;}

                        elsif($seq[$j] eq 'G' and $seq[$j-1] eq 'G' and $seq[$j-2] eq 'G' and $seq[$j-3] eq 'G' and $seq[$j-4] eq 'G' and $seq[$j-5] ne 'G')
                        {$g = $g+5;}

                        elsif($seq[$j] eq 'G' and $seq[$j-1] eq 'G' and $seq[$j-2] eq 'G' and $seq[$j-3] eq 'G' and $seq[$j-4] eq 'G' and $seq[$j-5] eq 'G' and $seq[$j-6] ne 'G')
                        {$g = $g+6;}

                        elsif($seq[$j] eq 'G' and $seq[$j-1] eq 'G' and $seq[$j-2] eq 'G' and $seq[$j-3] eq 'G' and $seq[$j-4] eq 'G' and $seq[$j-5] eq 'G' and $seq[$j-6] eq 'G')
                        {$g = $g+7;}
                }	
	
		elsif ($seq[$j]eq'C')
                {
                        if($seq[$j] eq'C' and $seq[$j-1] ne 'C')
                        {$c = $c+1;}

                        elsif($seq[$j] eq'C' and $seq[$j-1] eq 'C' and $seq[$j-2] ne 'C')
                        {$c = $c+2;}

                        elsif($seq[$j] eq 'C' and $seq[$j-1] eq 'C' and $seq[$j-2] eq 'C' and $seq[$j-3] ne 'C')
                        {$c = $c+3;}

                        elsif($seq[$j] eq 'C' and $seq[$j-1] eq 'C' and $seq[$j-2] eq 'C' and $seq[$j-3] eq 'C' and $seq[$j-4] ne 'C')
                        {$c = $c+4;}

                        elsif($seq[$j] eq 'C' and $seq[$j-1] eq 'C' and $seq[$j-2] eq 'C' and $seq[$j-3] eq 'C' and $seq[$j-4] eq 'C' and $seq[$j-5] ne 'C')
                        {$c = $c+5;}

                        elsif($seq[$j] eq 'C' and $seq[$j-1] eq 'C' and $seq[$j-2] eq 'C' and $seq[$j-3] eq 'C' and $seq[$j-4] eq 'C' and $seq[$j-5] eq 'C' and $seq[$j-6] ne 'C')
                        {$c = $c+6;}

                        elsif($seq[$j] eq 'C' and $seq[$j-1] eq 'C' and $seq[$j-2] eq 'C' and $seq[$j-3] eq 'C' and $seq[$j-4] eq 'C' and $seq[$j-5] eq 'C' and $seq[$j-6] eq 'C')
                        {$c = $c+7;}
                }
	}
print OUT "A=\t$a\tT=\t$t\tG=\t$g\tC=\t$c\n";
}
