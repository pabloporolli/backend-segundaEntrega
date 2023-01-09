export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb://localhost:27017/ecommerce',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "coder2195c20",
        "private_key_id": "acc6ec522b765432465a275c25169ed0b1e03b5f",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC4en95Kg1ieGRh\nXaNP8dnAMapxonw0Vvs2PzL8jMgFyGjPiLda39Dyadw+mn5pZK0mT0yhqLUJNmsF\n6rIZVtLuPijOs8ad1TzmMEE7nXPQsCE/yUHMg2w0ciPSsGrsLCaS63PbIsuPolev\n10+4JydYmRETPwaB3F9x5Mpaxhr3l+zIH6bOpadGu4UtOj6PvCEY4jVxD2gTyt5e\n32hhmmXNjKRih3rKeCAOXDOgZKv2+aYKKZO5tV00Bh3yL23piFHNZfZ7KpQrI0i2\nRfuZ9YyObjunwZBKsnJDy23EfWedv0KsCVktMrkeytyTnKkSORwtkFK6iwau/Ryv\nfDOJXyrHAgMBAAECggEAB9Nc35E+ArZA6w2mu5TywkYffChcfkUauf97VIUaVRh3\nzcBeDgZRkRiWUoRWP91L9RFgtFJ5f4il7v9r17EifuwqUGTS7gFMm8BifAdrxGei\nuXFHQvtn1l+2W+rGiZQKSanTfwr37Kg1cdml4ZXgahzWjktacmoC4hkTaaXFIUln\nkp7Hi9Lzwc5Q1CT8SV5Rwhf89Cn2xT4J+JMcNBjNQesPSxf2GKlqnRU+dQwGCgmS\nnQh2blvBtzurDFv5Awc2XvwN2FSAvZUdai8uG2sOE9/WbrXErsKcoeBbQG6puH7k\nCXvPUimfMFxTo5TDh+tYL3LH9sG232Oo3oMYZRedTQKBgQDtZwHZ9nnXvO3GsvyW\nTQHM9G2X2Dlr5zFw3wL7P850NIgrJb0u5O2QOvIKla3s9w2FluT+gEw394/C7R2z\nVQdfv9GuXVBIwvR2VdNSHKWo/+i6JT9B7vmN1mN5O+A+BoB5X6mVTFUFyneR5G0d\n0mOKXmAioLJMqwJp1hr/m1Xp/QKBgQDG7iCmDK1RaCZcj2G94tBJvF6tVEdH5Lyj\nmNOUQefP8IW6vYt80XdKhjKhbD2hbR0CSuRGze67kAnRqo8Vh8jokZsE+ved0pbD\n7dLMKwoUxburItpktEdrSLZHR832Ko8Bi4UyTDQIZbWNtfjTvRjYUWWO3owQl3c3\nlIhRrtkREwKBgCiTH2TiVGbD+puoQbVqifE+oXB/WykPBYs2Amtwt1dzFwbQ12mp\nZNTuzily9Zv3iY8YgCDjSqOSIzb8kcPxt2XtAehcOHmHIIMNHiX9kW619k/CR/J7\n5pkQWEYDLstLDzAvYmuK9UkdFpyPvvqG185xXNruPisOW0Y9erXPFbr9AoGAbZoN\niu85Hr0PRbgJ1iD9OWL7luv0SfwQouI00F5vZfXS+EwuahrOatT9WErWufXwIa85\njnkvq0902XvrUaV6YAi5LElJ3D6GqnSBy9N6vm8jMusFAK8DGmz5YNSC+boBCIzi\nWg/6KxY+rVExQxfQdH6EQe8DpLCPEqRXZwm6ttkCgYEAncxpftP296AN84AwgnsZ\n9Uc1uQE2FcooXZEe5/jwhHQlp6s3A9ZXVNbbZ1w8kMUoUTksbmIDCqeA0RPheqfQ\n/Z+T3fnwJPzedulKPflRgkqwoD7Ex1cEFCl+Kp5bEsq1JBkDfv5C3tc3ZK+xQIlR\nv4Uhk5t3OJwpPszRYAtFXMc=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-os6m8@coder2195c20.iam.gserviceaccount.com",
        "client_id": "113473879625261912910",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-os6m8%40coder2195c20.iam.gserviceaccount.com"
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    }
}
