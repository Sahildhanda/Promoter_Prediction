j=1
for i in `cat $1`
do
        echo $j " --->" $i
	perl moving_avg.pl $i $2 25
	echo " job is running"
	j=`expr $j + 1`
done
