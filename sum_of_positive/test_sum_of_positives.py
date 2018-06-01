"""Imports."""
import pytest
from sum_of_positives import positive_sum


def test_all_positive():
    """Test with all pos ints."""
assert positive_sum([1, 2,  3, 4, 5]) == 15


def test_with_one_neg():
    """Test with one neg int."""
assert positive_sum([1, -2, 3, 4, 5]) == 13


def test_with_multi_negs():
    """Test with more then one neg number."""
assert positive_sum([-1, 2, 3, 4, -5]) == 9


def test_empty_arr():
    """Test empty arr."""
assert positive_sum([]) == 0



