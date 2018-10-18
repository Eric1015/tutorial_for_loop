def isPrime(num)
    if (num < 2)
        return false
    else
        i = 2
        while i < num do
            if (num % i == 0)
                return false
            end
            i += 1
        end
        return true
    end
end

def printResult(array)
    array.each do |x|
        res = isPrime(x)
        print "#{x}: #{res}"
        puts ""
    end
end

array = [1, 2, 3, 4, 5, 6, 7]
printResult(array)