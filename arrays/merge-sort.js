function mergeSort(arr1, arr2) {
    var result = [];
    var i = 0;
    var j = 0;

    //merge two arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    //merge the rest of the elements and return
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}