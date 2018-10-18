def printOut1()
    for i in 1..5
        print i
        print " "
    end
end

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