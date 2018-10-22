# これが引数が素数であるかどうかを返してくれる関数です。
# 方法は難しいようでかなり簡単です。
# 素数っていうのは1とその数字以外の数字で割り切れないということでした。
# そこで、2からスタートして、割る数を1ずつ増やしながら、
# いったいその引数を割り切れる数字がその引数と同じ値になるまでに出てくるのか一つずつ割って確かめるというものだ。
# もしも、割り切れたら、それってつまり、素数ではないので偽が返ってきます。
# 逆に、割り切れずに引数と同じ値まで来てしまったのなら、それはつまり、素数なのです。
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