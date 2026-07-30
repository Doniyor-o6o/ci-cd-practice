from django.test import TestCase
from .models import Task

class TaskModelTest(TestCase):
    def test_str_representation(self):
        task = Task(title="Write tests")
        self.assertEqual(str(task), "Write tests")

# Create your tests here.
