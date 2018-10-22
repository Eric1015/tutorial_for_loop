# まずは基本のfor loop
# この例ですと、iは1から5まで一回のループの最後に1ずつ増えます
def printOut1()
    for i in 1..5
        print i
        print " "
    end
end

# 変わりまして、点が３つに増えると、1から4までつまり、
# 最後の数字を含まなくなります。
# なので、点の数には気をつけましょう
def printOut2()
    for i in 1...5
        print i
        print " "
    end
end

printOut1()
puts ""
puts "Press something to continue"
gets
printOut2()