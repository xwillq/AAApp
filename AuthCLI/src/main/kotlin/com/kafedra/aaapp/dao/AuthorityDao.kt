package com.kafedra.aaapp.dao

import com.google.inject.Inject
import com.kafedra.aaapp.di.HibernateProvider

class AuthorityDao {
    @Inject lateinit var sessionProvider : HibernateProvider
}