# 少しややこしくなるかもしれませんが、
# このように配列の中に別の配列を入れることができます。
# 形的には行列に似ています。
# この二重の配列のそれぞれの要素を一つずつ見ていきたいのでしたら、
# 外側の配列に対するループと内側に対するループの両方が必要になってきます。
def printOutMatrix(matrix)
    for i in 0...matrix.length
        # matrix[0]: [1,2,3], matrix[1]: [4,5,6]
        for j in 0...matrix[0].length
            # matrix[0][0]: 1, matrix[0][1]: 2
            print matrix[i][j]
            print " "
        end
        puts ""
    end
end

matrix = [[1, 2, 3], [4, 5, 6]]
printOutMatrix(matrix)