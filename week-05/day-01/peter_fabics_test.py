import unittest
import peter_fabics_work

class TestCount_and_sorting_method(unittest.TestCase):
        def test_sorting(self):
            self.assertEqual(peter_fabics_work.sorting ('aa', 'aa'), True)
            self.assertEqual(peter_fabics_work.sorting ('aa', 'ac'), False)
            self.assertEqual(peter_fabics_work.sorting ('aa1A', '1aaa'), True)
            self.assertEqual(peter_fabics_work.sorting ('cCc', 'aAa'), False)
            self.assertEqual(peter_fabics_work.sorting ('cCc', 'CcC'), True)


        def test_count(self):
            #self.create_file_width_content(self.file_name, self.content)
            self.assertEqual(peter_fabics_work.count ('c'), {'c':1})
            self.assertEqual(peter_fabics_work.count ('assa'), {'a':2, 's':2})
            self.assertEqual(peter_fabics_work.count ('c11'), {'c':1, '1':2})
            self.assertEqual(peter_fabics_work.count ('cc12'), {'c':2, '1':1, '2':1})
            self.assertEqual(peter_fabics_work.count ('bbb'), {'b':3})


if __name__ == '__main__':
    unittest.main()
