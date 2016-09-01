import unittest
import extend

class TestExtend(unittest.TestCase):
    def setUp(self):
        pass

    def test_add_2_and_5_is_7(self):
        self.assertEqual(extend.add(2, 5), 7)

    def test_add_4_and_1_is_5(self):
        self.assertEqual(extend.add(4, 1), 5)

    def test_max_of_three_first(self):
        self.assertEqual(extend.max_of_three(82, 25, 2), 82)

    def test_max_of_three_third(self):
        self.assertNotEqual(extend.max_of_three(38, 4, 5), 5)

    def test_median_seven(self):
        self.assertEqual(extend.median([7,1,3,122,5,3,5,24,9,11,15,8]), 7.5)

    def test_median_four(self):
        self.assertEqual(extend.median([1,2,3,4,5,6,7]), 4)

    def test_is_vovel_a(self):
        self.assertTrue(extend.is_vovel('A'))

    def test_is_vovel_k(self):
        self.assertFalse(extend.is_vovel('k'))

    def test_translate_bemutatkozik(self):
        self.assertEqual(extend.translate('bemutatkozik'), 'bevemuvutavatkovozivik')

    def test_translate_kolbice(self):
        self.assertEqual(extend.translate('kolbice'), 'kovolbiviceve')

if __name__ == '__main__':
    unittest.main()
