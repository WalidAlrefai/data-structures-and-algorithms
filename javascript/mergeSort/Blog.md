# Pseudocode
MergeSort

    ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)
    ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0
    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left


# Trace
Sample Array: [8,4,23,42,16,15]

### Pass1

in first take sample array into mergeSort() function
first part in mergeSort split array to lift and right then either lift and right we split lift and right even size of lift and equal one like this picture :

![](./assest/m1.png)

### Pass2

in second part of mergeSort() declare new array and loop through lift and rights and check if lift[0] < right[0] if lift[0] less than right[0] push it to new array and remove first element in lift and the same thing for right if condition false

![](./assest/m2.png)


### Pass3

in last step check the privious conditon for final lift and final right return sorted array.

![](./assest/m3.png)

# Efficency
Time: O(nlogn)

Overall time complexity of Merge sort is O(nLogn). It is more efficient as it is in worst case also the runtime is O(nlogn)

Space: The space complexity of Merge sort is O(n). This algorithm takes a lot of space.
