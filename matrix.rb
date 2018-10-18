def printOutMatrix(matrix)
    for i in 0...matrix.length
        for j in 0...matrix[0].length
            print matrix[i][j]
            print " "
        end
        puts ""
    end
end

matrix = [[1, 2, 3], [4, 5, 6]]
printOutMatrix(matrix)