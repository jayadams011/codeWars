"""You get an array of numbers, return the sum of all of the positives ones.
You get an array of numbers, return the sum of all of the positives ones."""


def positive_sum(arr):
    """Find sum of pos ints."""
    # Your code here
    s = 0
    for i in arr:
        if i > 0:
            s = s + i
    return s
